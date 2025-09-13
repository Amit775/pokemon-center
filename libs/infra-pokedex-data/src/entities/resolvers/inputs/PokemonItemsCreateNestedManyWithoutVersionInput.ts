import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyVersionInputEnvelope } from "../inputs/PokemonItemsCreateManyVersionInputEnvelope";
import { PokemonItemsCreateOrConnectWithoutVersionInput } from "../inputs/PokemonItemsCreateOrConnectWithoutVersionInput";
import { PokemonItemsCreateWithoutVersionInput } from "../inputs/PokemonItemsCreateWithoutVersionInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsCreateNestedManyWithoutVersionInput", {})
export class PokemonItemsCreateNestedManyWithoutVersionInput {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateWithoutVersionInput], {
    nullable: true
  })
  create?: PokemonItemsCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemsCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemsCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemsWhereUniqueInput[] | undefined;
}
