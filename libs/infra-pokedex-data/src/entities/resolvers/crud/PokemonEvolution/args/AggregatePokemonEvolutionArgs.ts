import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionOrderByWithRelationInput } from "../../../inputs/PokemonEvolutionOrderByWithRelationInput";
import { PokemonEvolutionWhereInput } from "../../../inputs/PokemonEvolutionWhereInput";
import { PokemonEvolutionWhereUniqueInput } from "../../../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonEvolutionArgs {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereInput, {
    nullable: true
  })
  where?: PokemonEvolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonEvolutionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonEvolutionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
