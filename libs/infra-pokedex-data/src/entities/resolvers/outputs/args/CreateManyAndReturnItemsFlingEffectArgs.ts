import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsWhereInput } from "../../inputs/ItemFlingEffectsWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnItemsFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectsWhereInput | undefined;
}
