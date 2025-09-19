import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateManyVersionInputEnvelope } from "../inputs/PokemonItemCreateManyVersionInputEnvelope";
import { PokemonItemCreateOrConnectWithoutVersionInput } from "../inputs/PokemonItemCreateOrConnectWithoutVersionInput";
import { PokemonItemCreateWithoutVersionInput } from "../inputs/PokemonItemCreateWithoutVersionInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemCreateNestedManyWithoutVersionInput", {})
export class PokemonItemCreateNestedManyWithoutVersionInput {
  @TypeGraphQL.Field(_type => [PokemonItemCreateWithoutVersionInput], {
    nullable: true
  })
  create?: PokemonItemCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemWhereUniqueInput[] | undefined;
}
