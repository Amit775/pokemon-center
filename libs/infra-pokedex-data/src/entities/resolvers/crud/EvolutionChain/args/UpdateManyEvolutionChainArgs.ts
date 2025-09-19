import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainUpdateManyMutationInput } from "../../../inputs/EvolutionChainUpdateManyMutationInput";
import { EvolutionChainWhereInput } from "../../../inputs/EvolutionChainWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEvolutionChainArgs {
  @TypeGraphQL.Field(_type => EvolutionChainUpdateManyMutationInput, {
    nullable: false
  })
  data!: EvolutionChainUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  where?: EvolutionChainWhereInput | undefined;
}
