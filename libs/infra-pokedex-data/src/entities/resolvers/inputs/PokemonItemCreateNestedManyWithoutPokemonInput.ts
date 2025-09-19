import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateManyPokemonInputEnvelope } from "../inputs/PokemonItemCreateManyPokemonInputEnvelope";
import { PokemonItemCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonItemCreateOrConnectWithoutPokemonInput";
import { PokemonItemCreateWithoutPokemonInput } from "../inputs/PokemonItemCreateWithoutPokemonInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemCreateNestedManyWithoutPokemonInput", {})
export class PokemonItemCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonItemCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonItemCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemWhereUniqueInput[] | undefined;
}
