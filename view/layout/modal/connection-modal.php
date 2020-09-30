<div class="modal fade" id="connection-modal" aria-hiden="true" role="dialog" aria-modal="false" aria-labelledby='modal-title' style="display:none;">
  <div class="modal-dialog">
    <div class="modal-content">
      <form id="user_form">
        <div class="modal-header">
          <h4 class="modal-title" id="modal-title">Se Connecter</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div class="modal-body">
          <div class="lbl-in-container">
            <div class="lbl-content">
              <label class="lbl">Username</label>
            </div>
            <div class="in-content">
              <input type="text" id="username" name="username" class="in" required>
            </div>
          </div>
          <div class="lbl-in-container">
            <div class="lbl-content">
              <label class="lbl">Password</label>
            </div>
            <div class="in-content">
              <input type="password" id="password" name="password" class="in" required>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <input type="hidden" value="1" name="type">
          <button type="button" class="btn btn-success" id="btn-add">Connection</button>
        </div>
      </form>
    </div>
  </div>
</div>
