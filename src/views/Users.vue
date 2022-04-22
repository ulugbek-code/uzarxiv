<template>
  <div class="container-fluid pt-3">
    <div class="content-header">
      <div class="row mb-2">
        <div class="col-auto">
          <h2 class="m-0 fw-normal">Foydalanuvchilar</h2>
        </div>
      </div>
    </div>
    <div class="content container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h4 class="card-title">Select user to change</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="module">
                  <div class="row">
                    <div class="col-12">
                      <div class="row">
                        <div class="col-12 col-sm-8">
                          <div class="actions">
                            <div class="for-label">
                              <select class="form-control">
                                <option value="" selected>-------------</option>
                                <option value="">
                                  Foydalanuvchilar tanlanganlarni o'chirish
                                </option>
                              </select>
                            </div>
                            <button
                              type="submit"
                              class="btn btn-outline-primary mx-2 mb-1"
                            >
                              Go
                            </button>
                            <span class="action-counter"
                              >24 dan 0 tanlandi</span
                            >
                          </div>
                        </div>
                        <div class="col-12 col-sm-4"></div>
                      </div>
                      <hr />
                      <div class="card">
                        <div class="card-body table-responsive p-0">
                          <table
                            id="result_list"
                            class="table table-striped mb-0"
                          >
                            <thead>
                              <tr>
                                <th
                                  class="djn-checkbox-select-all"
                                  tabindex="0"
                                  rowspan="1"
                                  colspan="1"
                                >
                                  <div class="text">
                                    <span
                                      ><input
                                        type="checkbox"
                                        id="action-toggle"
                                    /></span>
                                  </div>
                                </th>

                                <th
                                  class=""
                                  tabindex="0"
                                  rowspan="1"
                                  colspan="1"
                                >
                                  <div class="text">
                                    <span>User</span>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="24"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/24/change/"
                                    >Umidjon Muhamadaliyev</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="23"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/23/change/"
                                    >Diyora Obidjonova</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="22"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/22/change/"
                                    >Maruf Ro&#x27;zimuratov</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="21"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/21/change/"
                                    >Nozima Mirsalimova</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="20"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/20/change/"
                                    >Nargiza Umirzoqova</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="19"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/19/change/"
                                    >Dd</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="18"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/18/change/"
                                    >Djarilkaganov Ikram Amangeldie</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="17"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/17/change/"
                                    >Yuldashyeva Zulxumor Mahmutjon</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="16"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/16/change/"
                                    >Атакулов Бекзод Шовкатович</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="15"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/15/change/"
                                    >Муминова Ирода Ғайратовна</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="14"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/14/change/"
                                    >Дусбаева Гавхар</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="13"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/13/change/"
                                    >Davlatova Sabohon Komol Qizi</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="12"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/12/change/"
                                    >Халикова Дилноза Закирджановн</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="11"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/11/change/"
                                    >Сарибаев Жалғасбай Алламберган</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="10"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/10/change/"
                                    >Кушакова Гулнора Бурхановна</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="9"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/9/change/"
                                    >Муродуллоев Шавкат Икрориддино</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="8"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/8/change/"
                                    >Раимова Ҳилола Қобил қизи</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="7"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/7/change/"
                                    >Ҳасанова Дилором Салимовна</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="6"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/6/change/"
                                    >Вохидова Малика Ойбек қизи</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="5"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/5/change/"
                                    >Sarvarxo&#x27;ja</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="4"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/4/change/"
                                    >My Account</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="3"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/3/change/"
                                    >Diyorbek</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="even">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="2"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/2/change/"
                                    >Diyorbek Yuldashev</a
                                  >
                                </th>
                              </tr>

                              <tr role="row" class="odd">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    name="_selected_action"
                                    value="1"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/1/change/"
                                    >Admin</a
                                  >
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-5">
                      <div
                        class="dataTables_info"
                        role="status"
                        aria-live="polite"
                      >
                        24 Foydalanuvchilar
                      </div>
                    </div>

                    <div class="col-7">
                      <ul class="pagination pagination-sm m-0 float-right"></ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-primary.card-outline {
  border-top: 3px solid #007bff;
}
.card-header {
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
/* .card-body {
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
} */
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
}
.card-body > .table > thead > tr > th {
  border-top-width: 0;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
.card-body::after,
.card-footer::after,
.card-header::after {
  display: block;
  clear: both;
  content: "";
}
.for-label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
}
.table td.action-checkbox {
  width: 45px;
  padding-left: 1.5rem;
}
.djn-checkbox-select-all {
  padding-left: 1.5rem !important;
}
</style>
