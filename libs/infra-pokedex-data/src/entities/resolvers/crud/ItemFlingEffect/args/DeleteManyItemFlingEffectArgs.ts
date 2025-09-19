import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectWhereInput } from "../../../inputs/ItemFlingEffectWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectWhereInput | undefined;
}
