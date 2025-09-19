import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMoveInput } from "../inputs/MoveMetaCreateManyMoveInput";

@TypeGraphQL.InputType("MoveMetaCreateManyMoveInputEnvelope", {})
export class MoveMetaCreateManyMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveMetaCreateManyMoveInput], {
    nullable: false
  })
  data!: MoveMetaCreateManyMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
