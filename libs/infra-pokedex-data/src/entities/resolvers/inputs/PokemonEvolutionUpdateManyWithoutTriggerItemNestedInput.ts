import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyTriggerItemInputEnvelope } from "../inputs/PokemonEvolutionCreateManyTriggerItemInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutTriggerItemInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutTriggerItemInput";
import { PokemonEvolutionCreateWithoutTriggerItemInput } from "../inputs/PokemonEvolutionCreateWithoutTriggerItemInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutTriggerItemInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutTriggerItemInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyTriggerItemInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyTriggerItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
