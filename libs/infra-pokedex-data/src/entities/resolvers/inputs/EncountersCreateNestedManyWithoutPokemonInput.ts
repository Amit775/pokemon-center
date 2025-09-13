import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyPokemonInputEnvelope } from "../inputs/EncountersCreateManyPokemonInputEnvelope";
import { EncountersCreateOrConnectWithoutPokemonInput } from "../inputs/EncountersCreateOrConnectWithoutPokemonInput";
import { EncountersCreateWithoutPokemonInput } from "../inputs/EncountersCreateWithoutPokemonInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateNestedManyWithoutPokemonInput", {})
export class EncountersCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [EncountersCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: EncountersCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: EncountersCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  connect?: EncountersWhereUniqueInput[] | undefined;
}
