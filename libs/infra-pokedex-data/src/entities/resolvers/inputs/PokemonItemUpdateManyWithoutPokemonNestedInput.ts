import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateManyPokemonInputEnvelope } from "../inputs/PokemonItemCreateManyPokemonInputEnvelope";
import { PokemonItemCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonItemCreateOrConnectWithoutPokemonInput";
import { PokemonItemCreateWithoutPokemonInput } from "../inputs/PokemonItemCreateWithoutPokemonInput";
import { PokemonItemScalarWhereInput } from "../inputs/PokemonItemScalarWhereInput";
import { PokemonItemUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonItemUpdateManyWithWhereWithoutPokemonInput";
import { PokemonItemUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonItemUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonItemUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonItemUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpdateManyWithoutPokemonNestedInput", {})
export class PokemonItemUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonItemCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonItemCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonItemUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonItemUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonItemUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonItemScalarWhereInput[] | undefined;
}
