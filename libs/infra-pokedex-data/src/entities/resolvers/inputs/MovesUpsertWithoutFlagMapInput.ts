import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutFlagMapInput } from "../inputs/MovesCreateWithoutFlagMapInput";
import { MovesUpdateWithoutFlagMapInput } from "../inputs/MovesUpdateWithoutFlagMapInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutFlagMapInput", {})
export class MovesUpsertWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutFlagMapInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: MovesCreateWithoutFlagMapInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
