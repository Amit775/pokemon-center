import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyGenderInputEnvelope } from "../inputs/PokemonEvolutionCreateManyGenderInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutGenderInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutGenderInput";
import { PokemonEvolutionCreateWithoutGenderInput } from "../inputs/PokemonEvolutionCreateWithoutGenderInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutGenderInput", {})
export class PokemonEvolutionCreateNestedManyWithoutGenderInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutGenderInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutGenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutGenderInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutGenderInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyGenderInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyGenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
