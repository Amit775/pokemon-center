import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentUpdateWithoutMetaInput } from "../inputs/MoveMetaAilmentUpdateWithoutMetaInput";
import { MoveMetaAilmentWhereInput } from "../inputs/MoveMetaAilmentWhereInput";

@TypeGraphQL.InputType("MoveMetaAilmentUpdateToOneWithWhereWithoutMetaInput", {})
export class MoveMetaAilmentUpdateToOneWithWhereWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentUpdateWithoutMetaInput, {
    nullable: false
  })
  data!: MoveMetaAilmentUpdateWithoutMetaInput;
}
