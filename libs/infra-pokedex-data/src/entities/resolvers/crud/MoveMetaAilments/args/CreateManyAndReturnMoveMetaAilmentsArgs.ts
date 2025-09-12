import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsCreateManyInput } from "../../../inputs/MoveMetaAilmentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveMetaAilmentsArgs {
  @TypeGraphQL.Field(_type => [MoveMetaAilmentsCreateManyInput], {
    nullable: false
  })
  data!: MoveMetaAilmentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
