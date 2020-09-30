/*----------------------------------------------
Author : @chemotionplus
Website: www.chemotionplus.com
License: Commons Attribution 3.0
http://creativecommons.org/licenses/by/3.0/
------------------------------------------------*/

let modal = null
const focusableSelector = 'button, a, input, textarea'
let focusableElements = []
let previouslyFocussedElement = null
let alert = null;
let alertMessage =
{
  module_not_implemented:"Cette Module n'a pas encore été implémenté.<br/>Elle sera disponible dans la prochaine Version"
}
let alertType = ['alert_info', 'alert_confirmation']

const openModal = function(e)
{
  e.preventDefault()

  // modal = document.querySelectorAll('.modal')
  // for (var i = 0; i < modal.length; i++)
  // {
  //   if (modal[i].getAttribute('aria-modal'))
  //   {
  //     modal[i].setAttribute('aria-hidden', 'true')
  //     modal[i].removeAttribute('aria-modal')
  //     modal[i].removeEventListener('click', closeModal)
  //     modal[i].style.display = 'none'
  //     break
  //   }
  // }

  modal = document.querySelector(getLinkTag(e.target).getAttribute('href'))
  // modal = document.querySelector(e.target.getAttribute('href'))

  focusableElements = Array.from (modal.querySelectorAll(focusableSelector))
  previouslyFocussedElement = document.querySelector(':focus')
  modal.style.display = null
  focusableElements[0].focus()
  modal.removeAttribute('aria-hidden')
  modal.setAttribute('aria-modal', 'true')
  modal.addEventListener('click', closeModal)
  modal.querySelector('.close').addEventListener('click', closeModal)
  // modal.querySelector('.btn-default').addEventListener('click', closeModal)
  modal.querySelector('.modal-dialog .modal-content').addEventListener('click', stopPropagation)
}

const closeModal = function(e)
{
  if (modal === null) return
  if (previouslyFocussedElement !== null) previouslyFocussedElement.focus()
  e.preventDefault()
  modal.setAttribute('aria-hidden', 'true')
  modal.removeAttribute('aria-modal')
  modal.removeEventListener('click', closeModal)
  modal.querySelector('.close').removeEventListener('click', closeModal)
  // modal.querySelector('.btn-default').removeEventListener('click', closeModal)
  modal.querySelector('.modal-dialog .modal-content').removeEventListener('click', stopPropagation)
  const hideModal = function()
  {
    modal.style.display = 'none'
    modal.removeEventListener('animationend', hideModal)
    modal = null
  }
  modal.addEventListener('animationend', hideModal)
}

const stopPropagation = function(e)
{
  e.stopPropagation()
}

const focusInModal = function(e)
{
  e.preventDefault()
  let index = focusableElements.findIndex(f => f === modal.querySelector(':focus'))
  if (e.shiftKey === true)
  {
    index --
  }
  else
  {
    index++
  }
  if (index >= focusableElements.length)
  {
  index = 0
  }
  if (index < 0)
  {
    index = focusableElements.length - 1
  }
  focusableElements[index].focus()
}


function renderModal (alertName, alertMessage)
{
  // console.log(alertName + ' (=>): ' + alertMessage)
  let modalTitle = document.createElement('h4')
      modalTitle.className = 'modal-title'
      modalTitle.textContent = (alertName)

  let textWarning = document.createElement('p')
      textWarning.className = 'text-warning'
      textWarning.textContent = ('<small>' + alertMessage + '</small>')

  // console.log(document.querySelector('.modal.alert-modal .modal-header'))
  document.querySelector('.modal.alert-modal .modal-header').appendChild(modalTitle)
  document.querySelector('.modal.alert-modal .modal-body').appendChild(textWarning)

}

const setAlert = function(e)
{
  e.preventDefault()
  let alert = document.querySelector('.alert .alert-message')
  let alert_name = alert.getAttribute('name')
  let alert_type = alert.getAttribute('value')

  if (alert_name === alertType[0] && alert_type === 'module_not_implemented')
  {
    renderModal(alert_name, alertMessage['module_not_implemented'])


  }
}

function getLinkTag(childNode)
{
  let element = childNode
  let index = null

  while (true)
  {
    if (element.tagName.toLowerCase() === 'a')
    {
      index = element
      break
    }
    else if (element.parentNode.tagName.toLowerCase() === 'a')
    {
      index = element.parentNode
      break
    }
    else
    {
      element = element.parentNode;
    }
  }
  return index
}


document.querySelectorAll('.modal-link').forEach(a => {
  a.addEventListener('click', openModal)
});


document.querySelectorAll('.test.modal-link').forEach(a => {
  console.log('test add Event on table Link');
  a.addEventListener('click', openModal)
});

if (document.querySelector('#delete'))
{
  document.querySelector('#delete').addEventListener('click', closeModal)
}

// document.querySelectorAll('.alert').forEach(a => {
//   a.addEventListener('click', setAlert)
// });


window.addEventListener('keydown', function(e)
{
  if (e.key === "Escape" || e.key === "Esc")
  {
    closeModal(e)
  }
  if (e.key === 'Tab' && modal !== null)
  {
    focusInModal(e)
  }
})
