import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureCreateInput } from "../../../inputs/NatureCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNatureArgs {
  @TypeGraphQL.Field(_type => NatureCreateInput, {
    nullable: false
  })
  data!: NatureCreateInput;
}
