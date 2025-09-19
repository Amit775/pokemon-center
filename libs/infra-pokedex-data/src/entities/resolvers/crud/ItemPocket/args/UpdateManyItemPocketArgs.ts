import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketUpdateManyMutationInput } from "../../../inputs/ItemPocketUpdateManyMutationInput";
import { ItemPocketWhereInput } from "../../../inputs/ItemPocketWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemPocketArgs {
  @TypeGraphQL.Field(_type => ItemPocketUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemPocketUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemPocketWhereInput, {
    nullable: true
  })
  where?: ItemPocketWhereInput | undefined;
}
