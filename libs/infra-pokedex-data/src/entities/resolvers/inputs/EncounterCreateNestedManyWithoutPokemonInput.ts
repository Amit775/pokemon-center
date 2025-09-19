import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyPokemonInputEnvelope } from "../inputs/EncounterCreateManyPokemonInputEnvelope";
import { EncounterCreateOrConnectWithoutPokemonInput } from "../inputs/EncounterCreateOrConnectWithoutPokemonInput";
import { EncounterCreateWithoutPokemonInput } from "../inputs/EncounterCreateWithoutPokemonInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateNestedManyWithoutPokemonInput", {})
export class EncounterCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [EncounterCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: EncounterCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterWhereUniqueInput[] | undefined;
}
