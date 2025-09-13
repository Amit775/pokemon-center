import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutMetaInput } from "../inputs/MovesCreateWithoutMetaInput";
import { MovesUpdateWithoutMetaInput } from "../inputs/MovesUpdateWithoutMetaInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutMetaInput", {})
export class MovesUpsertWithoutMetaInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutMetaInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MovesCreateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
