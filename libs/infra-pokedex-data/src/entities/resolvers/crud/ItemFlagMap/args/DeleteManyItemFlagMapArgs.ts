import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapWhereInput } from "../../../inputs/ItemFlagMapWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemFlagMapArgs {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereInput, {
    nullable: true
  })
  where?: ItemFlagMapWhereInput | undefined;
}
