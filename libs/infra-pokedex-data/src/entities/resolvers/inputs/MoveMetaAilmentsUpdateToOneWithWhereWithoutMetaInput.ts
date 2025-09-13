import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsUpdateWithoutMetaInput } from "../inputs/MoveMetaAilmentsUpdateWithoutMetaInput";
import { MoveMetaAilmentsWhereInput } from "../inputs/MoveMetaAilmentsWhereInput";

@TypeGraphQL.InputType("MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput", {})
export class MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpdateWithoutMetaInput, {
    nullable: false
  })
  data!: MoveMetaAilmentsUpdateWithoutMetaInput;
}
