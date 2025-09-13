import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsWhereInput } from "../../inputs/EvolutionChainsWhereInput";

@TypeGraphQL.ArgsType()
export class ItemsCountBabyTriggerItemsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  where?: EvolutionChainsWhereInput | undefined;
}
