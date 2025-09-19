import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeOrderByWithRelationInput } from "../../../inputs/PokemonFormTypeOrderByWithRelationInput";
import { PokemonFormTypeWhereInput } from "../../../inputs/PokemonFormTypeWhereInput";
import { PokemonFormTypeWhereUniqueInput } from "../../../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonFormTypeArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonFormTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonFormTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
