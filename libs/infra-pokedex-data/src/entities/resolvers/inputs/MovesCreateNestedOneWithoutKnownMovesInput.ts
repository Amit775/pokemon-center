import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutKnownMovesInput } from "../inputs/MovesCreateOrConnectWithoutKnownMovesInput";
import { MovesCreateWithoutKnownMovesInput } from "../inputs/MovesCreateWithoutKnownMovesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutKnownMovesInput", {})
export class MovesCreateNestedOneWithoutKnownMovesInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutKnownMovesInput, {
    nullable: true
  })
  create?: MovesCreateWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutKnownMovesInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
