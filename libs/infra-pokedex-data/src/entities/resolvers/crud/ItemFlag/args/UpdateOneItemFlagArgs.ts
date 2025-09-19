import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagUpdateInput } from "../../../inputs/ItemFlagUpdateInput";
import { ItemFlagWhereUniqueInput } from "../../../inputs/ItemFlagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemFlagArgs {
  @TypeGraphQL.Field(_type => ItemFlagUpdateInput, {
    nullable: false
  })
  data!: ItemFlagUpdateInput;

  @TypeGraphQL.Field(_type => ItemFlagWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagWhereUniqueInput;
}
