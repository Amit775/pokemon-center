import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyMoveInputEnvelope } from "../inputs/PokemonMoveCreateManyMoveInputEnvelope";
import { PokemonMoveCreateOrConnectWithoutMoveInput } from "../inputs/PokemonMoveCreateOrConnectWithoutMoveInput";
import { PokemonMoveCreateWithoutMoveInput } from "../inputs/PokemonMoveCreateWithoutMoveInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveCreateNestedManyWithoutMoveInput", {})
export class PokemonMoveCreateNestedManyWithoutMoveInput {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateWithoutMoveInput], {
    nullable: true
  })
  create?: PokemonMoveCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMoveCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMoveCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMoveWhereUniqueInput[] | undefined;
}
