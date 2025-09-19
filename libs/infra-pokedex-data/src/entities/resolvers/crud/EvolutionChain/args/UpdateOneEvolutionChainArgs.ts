import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionChainUpdateInput } from "../../../inputs/EvolutionChainUpdateInput";
import { EvolutionChainWhereUniqueInput } from "../../../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEvolutionChainArgs {
  @TypeGraphQL.Field(_type => EvolutionChainUpdateInput, {
    nullable: false
  })
  data!: EvolutionChainUpdateInput;

  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainWhereUniqueInput;
}
