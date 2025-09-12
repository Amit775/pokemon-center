import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateWithoutMetaCategoryInput } from "../inputs/MoveMetaCreateWithoutMetaCategoryInput";
import { MoveMetaUpdateWithoutMetaCategoryInput } from "../inputs/MoveMetaUpdateWithoutMetaCategoryInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput", {})
export class MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaUpdateWithoutMetaCategoryInput, {
    nullable: false
  })
  update!: MoveMetaUpdateWithoutMetaCategoryInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateWithoutMetaCategoryInput, {
    nullable: false
  })
  create!: MoveMetaCreateWithoutMetaCategoryInput;
}
