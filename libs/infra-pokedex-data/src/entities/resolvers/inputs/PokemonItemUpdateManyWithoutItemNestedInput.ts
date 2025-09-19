import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateManyItemInputEnvelope } from "../inputs/PokemonItemCreateManyItemInputEnvelope";
import { PokemonItemCreateOrConnectWithoutItemInput } from "../inputs/PokemonItemCreateOrConnectWithoutItemInput";
import { PokemonItemCreateWithoutItemInput } from "../inputs/PokemonItemCreateWithoutItemInput";
import { PokemonItemScalarWhereInput } from "../inputs/PokemonItemScalarWhereInput";
import { PokemonItemUpdateManyWithWhereWithoutItemInput } from "../inputs/PokemonItemUpdateManyWithWhereWithoutItemInput";
import { PokemonItemUpdateWithWhereUniqueWithoutItemInput } from "../inputs/PokemonItemUpdateWithWhereUniqueWithoutItemInput";
import { PokemonItemUpsertWithWhereUniqueWithoutItemInput } from "../inputs/PokemonItemUpsertWithWhereUniqueWithoutItemInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpdateManyWithoutItemNestedInput", {})
export class PokemonItemUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [PokemonItemCreateWithoutItemInput], {
    nullable: true
  })
  create?: PokemonItemCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: PokemonItemUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemCreateManyItemInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonItemUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: PokemonItemUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: PokemonItemUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonItemScalarWhereInput[] | undefined;
}
