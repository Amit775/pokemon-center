import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutKnownMovesInput } from "../inputs/MoveCreateOrConnectWithoutKnownMovesInput";
import { MoveCreateWithoutKnownMovesInput } from "../inputs/MoveCreateWithoutKnownMovesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedOneWithoutKnownMovesInput", {})
export class MoveCreateNestedOneWithoutKnownMovesInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutKnownMovesInput, {
    nullable: true
  })
  create?: MoveCreateWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutKnownMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;
}
