import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberOrderByWithRelationInput } from "../../../inputs/PokemonDexNumberOrderByWithRelationInput";
import { PokemonDexNumberWhereInput } from "../../../inputs/PokemonDexNumberWhereInput";
import { PokemonDexNumberWhereUniqueInput } from "../../../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonDexNumberOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonDexNumberWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
