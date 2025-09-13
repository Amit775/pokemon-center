import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyItemInputEnvelope } from "../inputs/PokemonItemsCreateManyItemInputEnvelope";
import { PokemonItemsCreateOrConnectWithoutItemInput } from "../inputs/PokemonItemsCreateOrConnectWithoutItemInput";
import { PokemonItemsCreateWithoutItemInput } from "../inputs/PokemonItemsCreateWithoutItemInput";
import { PokemonItemsScalarWhereInput } from "../inputs/PokemonItemsScalarWhereInput";
import { PokemonItemsUpdateManyWithWhereWithoutItemInput } from "../inputs/PokemonItemsUpdateManyWithWhereWithoutItemInput";
import { PokemonItemsUpdateWithWhereUniqueWithoutItemInput } from "../inputs/PokemonItemsUpdateWithWhereUniqueWithoutItemInput";
import { PokemonItemsUpsertWithWhereUniqueWithoutItemInput } from "../inputs/PokemonItemsUpsertWithWhereUniqueWithoutItemInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsUpdateManyWithoutItemNestedInput", {})
export class PokemonItemsUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateWithoutItemInput], {
    nullable: true
  })
  create?: PokemonItemsCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemsCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: PokemonItemsUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemsCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: PokemonItemsUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: PokemonItemsUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonItemsScalarWhereInput[] | undefined;
}
