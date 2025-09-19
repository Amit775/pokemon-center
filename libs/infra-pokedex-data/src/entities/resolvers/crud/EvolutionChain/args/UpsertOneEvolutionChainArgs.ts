import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainCreateInput } from "../../../inputs/EvolutionChainCreateInput";
import { EvolutionChainUpdateInput } from "../../../inputs/EvolutionChainUpdateInput";
import { EvolutionChainWhereUniqueInput } from "../../../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEvolutionChainArgs {
  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainCreateInput, {
    nullable: false
  })
  create!: EvolutionChainCreateInput;

  @TypeGraphQL.Field(_type => EvolutionChainUpdateInput, {
    nullable: false
  })
  update!: EvolutionChainUpdateInput;
}
