import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemUpdateInput } from "../../../inputs/ItemUpdateInput";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemArgs {
  @TypeGraphQL.Field(_type => ItemUpdateInput, {
    nullable: false
  })
  data!: ItemUpdateInput;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;
}
