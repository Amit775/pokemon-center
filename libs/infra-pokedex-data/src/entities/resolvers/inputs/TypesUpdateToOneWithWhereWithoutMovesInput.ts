import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutMovesInput } from "../inputs/TypesUpdateWithoutMovesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutMovesInput", {})
export class TypesUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutMovesInput;
}
