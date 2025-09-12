import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsWhereInput } from "../../../inputs/ItemFlagsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemFlagsArgs {
  @TypeGraphQL.Field(_type => ItemFlagsWhereInput, {
    nullable: true
  })
  where?: ItemFlagsWhereInput | undefined;
}
