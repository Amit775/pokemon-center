import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsUpdateInput } from "../../../inputs/ItemsUpdateInput";
import { ItemsWhereUniqueInput } from "../../../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemsArgs {
  @TypeGraphQL.Field(_type => ItemsUpdateInput, {
    nullable: false
  })
  data!: ItemsUpdateInput;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;
}
