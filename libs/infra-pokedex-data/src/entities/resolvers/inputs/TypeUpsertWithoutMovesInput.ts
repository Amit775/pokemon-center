import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutMovesInput } from "../inputs/TypeCreateWithoutMovesInput";
import { TypeUpdateWithoutMovesInput } from "../inputs/TypeUpdateWithoutMovesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutMovesInput", {})
export class TypeUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutMovesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}
