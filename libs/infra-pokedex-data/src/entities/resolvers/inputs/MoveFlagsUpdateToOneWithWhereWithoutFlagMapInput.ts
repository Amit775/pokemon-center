import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsUpdateWithoutFlagMapInput } from "../inputs/MoveFlagsUpdateWithoutFlagMapInput";
import { MoveFlagsWhereInput } from "../inputs/MoveFlagsWhereInput";

@TypeGraphQL.InputType("MoveFlagsUpdateToOneWithWhereWithoutFlagMapInput", {})
export class MoveFlagsUpdateToOneWithWhereWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveFlagsWhereInput, {
    nullable: true
  })
  where?: MoveFlagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsUpdateWithoutFlagMapInput, {
    nullable: false
  })
  data!: MoveFlagsUpdateWithoutFlagMapInput;
}
