import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesUpdateManyMutationInput } from "../../../inputs/ItemGameIndicesUpdateManyMutationInput";
import { ItemGameIndicesWhereInput } from "../../../inputs/ItemGameIndicesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemGameIndicesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesWhereInput, {
    nullable: true
  })
  where?: ItemGameIndicesWhereInput | undefined;
}
