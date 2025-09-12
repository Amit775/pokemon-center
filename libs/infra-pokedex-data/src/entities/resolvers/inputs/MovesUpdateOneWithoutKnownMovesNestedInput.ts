import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutKnownMovesInput } from "../inputs/MovesCreateOrConnectWithoutKnownMovesInput";
import { MovesCreateWithoutKnownMovesInput } from "../inputs/MovesCreateWithoutKnownMovesInput";
import { MovesUpdateToOneWithWhereWithoutKnownMovesInput } from "../inputs/MovesUpdateToOneWithWhereWithoutKnownMovesInput";
import { MovesUpsertWithoutKnownMovesInput } from "../inputs/MovesUpsertWithoutKnownMovesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateOneWithoutKnownMovesNestedInput", {})
export class MovesUpdateOneWithoutKnownMovesNestedInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutKnownMovesInput, {
    nullable: true
  })
  create?: MovesCreateWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutKnownMovesInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpsertWithoutKnownMovesInput, {
    nullable: true
  })
  upsert?: MovesUpsertWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  disconnect?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  delete?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateToOneWithWhereWithoutKnownMovesInput, {
    nullable: true
  })
  update?: MovesUpdateToOneWithWhereWithoutKnownMovesInput | undefined;
}
