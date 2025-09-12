import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsCreateWithoutMetaInput } from "../inputs/MoveMetaAilmentsCreateWithoutMetaInput";
import { MoveMetaAilmentsWhereUniqueInput } from "../inputs/MoveMetaAilmentsWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaAilmentsCreateOrConnectWithoutMetaInput", {})
export class MoveMetaAilmentsCreateOrConnectWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaAilmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaAilmentsCreateWithoutMetaInput;
}
