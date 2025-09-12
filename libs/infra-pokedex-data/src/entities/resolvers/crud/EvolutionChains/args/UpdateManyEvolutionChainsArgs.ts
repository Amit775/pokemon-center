import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainsUpdateManyMutationInput } from "../../../inputs/EvolutionChainsUpdateManyMutationInput";
import { EvolutionChainsWhereInput } from "../../../inputs/EvolutionChainsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEvolutionChainsArgs {
  @TypeGraphQL.Field(_type => EvolutionChainsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EvolutionChainsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EvolutionChainsWhereInput, {
    nullable: true
  })
  where?: EvolutionChainsWhereInput | undefined;
}
