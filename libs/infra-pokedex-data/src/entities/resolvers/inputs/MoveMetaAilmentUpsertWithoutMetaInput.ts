import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentCreateWithoutMetaInput } from "../inputs/MoveMetaAilmentCreateWithoutMetaInput";
import { MoveMetaAilmentUpdateWithoutMetaInput } from "../inputs/MoveMetaAilmentUpdateWithoutMetaInput";
import { MoveMetaAilmentWhereInput } from "../inputs/MoveMetaAilmentWhereInput";

@TypeGraphQL.InputType("MoveMetaAilmentUpsertWithoutMetaInput", {})
export class MoveMetaAilmentUpsertWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentUpdateWithoutMetaInput, {
    nullable: false
  })
  update!: MoveMetaAilmentUpdateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaAilmentCreateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentWhereInput | undefined;
}
