import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutFlagMapInput } from "../inputs/MoveCreateOrConnectWithoutFlagMapInput";
import { MoveCreateWithoutFlagMapInput } from "../inputs/MoveCreateWithoutFlagMapInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedOneWithoutFlagMapInput", {})
export class MoveCreateNestedOneWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: MoveCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;
}
