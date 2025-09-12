import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaAilmentsCreateOrConnectWithoutMetaInput";
import { MoveMetaAilmentsCreateWithoutMetaInput } from "../inputs/MoveMetaAilmentsCreateWithoutMetaInput";
import { MoveMetaAilmentsWhereUniqueInput } from "../inputs/MoveMetaAilmentsWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaAilmentsCreateNestedOneWithoutMetaInput", {})
export class MoveMetaAilmentsCreateNestedOneWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveMetaAilmentsCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveMetaAilmentsCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveMetaAilmentsWhereUniqueInput | undefined;
}
