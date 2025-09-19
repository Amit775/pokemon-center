import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeOrderByWithRelationInput } from "../../../inputs/PokemonTypeOrderByWithRelationInput";
import { PokemonTypeWhereInput } from "../../../inputs/PokemonTypeWhereInput";
import { PokemonTypeWhereUniqueInput } from "../../../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonTypeArgs {
  @TypeGraphQL.Field(_type => PokemonTypeWhereInput, {
    nullable: true
  })
  where?: PokemonTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
