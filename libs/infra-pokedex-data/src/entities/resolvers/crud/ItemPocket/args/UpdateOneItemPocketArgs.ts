import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketUpdateInput } from "../../../inputs/ItemPocketUpdateInput";
import { ItemPocketWhereUniqueInput } from "../../../inputs/ItemPocketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemPocketArgs {
  @TypeGraphQL.Field(_type => ItemPocketUpdateInput, {
    nullable: false
  })
  data!: ItemPocketUpdateInput;

  @TypeGraphQL.Field(_type => ItemPocketWhereUniqueInput, {
    nullable: false
  })
  where!: ItemPocketWhereUniqueInput;
}
