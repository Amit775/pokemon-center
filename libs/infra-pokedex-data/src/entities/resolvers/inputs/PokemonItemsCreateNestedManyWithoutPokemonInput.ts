import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyPokemonInputEnvelope } from "../inputs/PokemonItemsCreateManyPokemonInputEnvelope";
import { PokemonItemsCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonItemsCreateOrConnectWithoutPokemonInput";
import { PokemonItemsCreateWithoutPokemonInput } from "../inputs/PokemonItemsCreateWithoutPokemonInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsCreateNestedManyWithoutPokemonInput", {})
export class PokemonItemsCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonItemsCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemsCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemsCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemsWhereUniqueInput[] | undefined;
}
