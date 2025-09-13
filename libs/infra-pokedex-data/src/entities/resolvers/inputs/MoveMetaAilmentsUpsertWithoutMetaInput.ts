import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsCreateWithoutMetaInput } from "../inputs/MoveMetaAilmentsCreateWithoutMetaInput";
import { MoveMetaAilmentsUpdateWithoutMetaInput } from "../inputs/MoveMetaAilmentsUpdateWithoutMetaInput";
import { MoveMetaAilmentsWhereInput } from "../inputs/MoveMetaAilmentsWhereInput";

@TypeGraphQL.InputType("MoveMetaAilmentsUpsertWithoutMetaInput", {})
export class MoveMetaAilmentsUpsertWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpdateWithoutMetaInput, {
    nullable: false
  })
  update!: MoveMetaAilmentsUpdateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaAilmentsCreateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentsWhereInput | undefined;
}
