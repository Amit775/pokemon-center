import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainWhereInput } from "../../inputs/EvolutionChainWhereInput";

@TypeGraphQL.ArgsType()
export class ItemCountBabyTriggerItemsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  where?: EvolutionChainWhereInput | undefined;
}
